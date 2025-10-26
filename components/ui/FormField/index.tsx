import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BaseFormFieldProps {
  label: string;
  id?: string;
}

interface InputFormFieldProps extends BaseFormFieldProps {
  type?: 'text' | 'email' | 'tel' | 'password';
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

interface TextareaFormFieldProps extends BaseFormFieldProps {
  type: 'textarea';
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

type FormFieldProps = InputFormFieldProps | TextareaFormFieldProps;

export default function FormField({ label, id, type = 'text', ...props }: FormFieldProps) {
  const inputClasses =
    'w-full rounded-lg border border-light-gray bg-light-gray px-4 py-2 font-body text-base cursor-not-allowed';

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-dark-gray">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          className={cn(inputClasses, 'resize-y')}
          {...(props as TextareaFormFieldProps).textareaProps}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={inputClasses}
          {...(props as InputFormFieldProps).inputProps}
        />
      )}
    </div>
  );
}
