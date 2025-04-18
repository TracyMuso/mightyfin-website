import type { AboutFeatureCard, FormType } from "@/types"

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

export const featuresData: AboutFeatureCard[] = [
  {
  icon: '/Icons/web.png',
  title: 'Smart Technology',
  text1: 'Experience seamless loan management with our intuitive online platform. Apply for loans, manage your accounts, and access personalized financial advice and resources anytime, anywhere.',
  text2: 'Our AI-driven system ensures a fast, secured, efficient, and user-friendly experience, tailoring options to your specific needs.'
 },
 {
  icon: '/Icons/piggy_bank.png',
  title: 'Competitive Rates ',
  text1: 'Enjoy affordable and transparent interest rates with no hidden fees or surprises.',
  text2: ' Our smart technology assesses your eligibility and designs a repayment plan that minimizes the risk of default, ensuring you get the best deal.'
 },
 {
  icon: '/Icons/calender_check.png',
  title: 'Flexible Repayment Plans',
  text1: 'We recognize that each financial situation is unique. Our repayment options are designed to fit your budget and needs, offering flexible terms.',
  text2: 'Choose a shorter term for a quicker payoff or a longer term for lower monthly payments.'
 },
]