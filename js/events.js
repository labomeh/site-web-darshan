// Configuration
const GITHUB_REPO = 'labomeh/site-pro-marie-pierre-garnier';
const EVENTS_FOLDER = '_events';
const API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents/${EVENTS_FOLDER}`;

// Fonction utilitaire pour échapper le HTML et prévenir les injections XSS
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

async function loadEvents() {
    const container = document.getElementById('events-container');

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Erreur de chargement');
        }

        const files = await response.json();
        const events = [];

        for (const file of files) {
            if (file.name.endsWith('.md')) {
                const content = await fetch(file.download_url);
                const text = await content.text();
                const event = parseEvent(text, file.name);
                if (event) events.push(event);
            }
        }

        events.sort((a, b) => new Date(a.date) - new Date(b.date));

        const now = new Date();
        const upcomingEvents = events.filter(e => new Date(e.date) >= now);

        displayEvents(upcomingEvents, container);
    } catch (error) {
        console.error('Erreur:', error);
        container.innerHTML = '<p class="no-events">Aucun événement pour le moment.</p>';
    }
}

function parseEvent(content, filename) {
    const parts = content.split('---');
    if (parts.length < 3) return null;

    const frontmatter = parts[1];
    const body = parts.slice(2).join('---').trim();

    const event = { id: filename.replace('.md', '') };

    frontmatter.split('\n').forEach(line => {
        const match = line.match(/^(\w+):\s*(.+)$/);
        if (match) {
            event[match[1]] = match[2].replace(/^["']|["']$/g, '');
        }
    });

    event.body = body;
    return event;
}

function displayEvents(events, container) {
    if (events.length === 0) {
        container.innerHTML = '<p class="no-events">Aucun événement à venir.</p>';
        return;
    }

    container.innerHTML = events.map(event => {
        const img = event.image
            ? `<img src="${escapeHtml(event.image)}" alt="${escapeHtml(event.title)}" class="event-image">`
            : '';
        const loc = event.location
            ? `<span class="event-location">📍 ${escapeHtml(event.location)}</span>`
            : '';
        const spots = event.available_spots
            ? `<p class="spots">Places disponibles : ${escapeHtml(event.available_spots)}</p>`
            : '';
        const contact = event.contact_info
            ? `<div class="event-contact"><strong>Pour vous inscrire :</strong><br>${escapeHtml(event.contact_info)}</div>`
            : '';

        return `
            <article class="event-card">
                ${img}
                <div class="event-content">
                    <h3>${escapeHtml(event.title)}</h3>
                    <div class="event-meta">
                        <span>📅 ${formatDate(event.date)}</span>
                        ${loc}
                    </div>
                    <div class="event-description">${markdownToHtml(event.body)}</div>
                    ${spots}
                    ${contact}
                </div>
            </article>
        `;
    }).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function markdownToHtml(markdown) {
    if (!markdown) return '';

    // Conversion markdown vers HTML avec échappement de base
    let html = markdown
        // Liens [texte](url)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        // Gras **texte**
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italique *texte*
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Listes non ordonnées
        .replace(/^\- (.+)$/gm, '<li>$1</li>')
        // Retours à la ligne simples
        .replace(/\n/g, '<br>');

    // Envelopper les listes <li> dans <ul>
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Séparer en paragraphes (double retour à la ligne)
    html = html
        .split('<br><br>')
        .map(p => p.trim())
        .filter(p => p && !p.startsWith('<ul>'))
        .map(p => `<p>${p}</p>`)
        .join('');

    return html;
}

document.addEventListener('DOMContentLoaded', loadEvents);
