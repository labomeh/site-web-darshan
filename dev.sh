#!/bin/bash

# Vérifier si local_backend est activé
if grep -q "local_backend: true" admin/config.yml; then
    echo "✅ Mode dev local activé"
else
    echo "❌ ERREUR: Ajoutez 'local_backend: true' dans admin/config.yml"
    exit 1
fi

# Lancer le proxy en arrière-plan
npx @decaporg/decap-server &
PROXY_PID=$!

# Lancer le serveur web
npx live-server --port=8000

# Cleanup au Ctrl+C
trap "kill $PROXY_PID" EXIT
