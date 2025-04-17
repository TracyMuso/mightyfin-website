import { FormType } from "@/types"

export const FormFieldData: FormType[] = [
  {
    type: 'text',
    label: 'Full Name',
    id: 'name',
    for: 'name',
    name: 'name',
    placeholder: 'Your Name...',
  },
  {
    type: 'text',
    label: 'Phone',
    id: 'phone',
    for: 'phone',
    name: 'phone',
    placeholder: '09771223456',
  },
  {
    type: 'email',
    id: 'email',
    for: 'email',
    label: 'Email',
    name: 'email',
    placeholder: 'jane@mail.com',
  },
]