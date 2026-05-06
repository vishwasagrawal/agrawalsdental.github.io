export interface Testimonial {
  id: number
  name: string
  text: string
  rating: number
  treatment: string
  initials: string
  date: string
  avatarColor: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    text: 'Dr Agrawal is absolutely wonderful! She made my root canal treatment completely painless. The clinic is spotless and the staff is incredibly warm. I was nervous at first but they made me feel so comfortable. Highly recommend!',
    rating: 5,
    treatment: 'Root Canal Treatment',
    initials: 'PS',
    date: 'March 2024',
    avatarColor: 'bg-pink-500',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    text: "I've been bringing my entire family here for years. The dental implant procedure was seamless and the results are incredible. I can't stop smiling! The aftercare instructions were thorough and everything healed perfectly.",
    rating: 5,
    treatment: 'Dental Implants',
    initials: 'RM',
    date: 'February 2024',
    avatarColor: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'Anjali Patel',
    text: 'Got my teeth whitening done here and the results exceeded my expectations! The doctor explained every step clearly. My teeth are now 6 shades whiter and I feel so confident about my smile.',
    rating: 5,
    treatment: 'Teeth Whitening',
    initials: 'AP',
    date: 'January 2024',
    avatarColor: 'bg-purple-500',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    text: "The invisible aligners transformed my smile in just 14 months. The whole team was supportive throughout the journey. Best investment I've ever made for my confidence and professional appearance!",
    rating: 5,
    treatment: 'Clear Aligners',
    initials: 'VS',
    date: 'December 2023',
    avatarColor: 'bg-green-500',
  },
  {
    id: 5,
    name: 'Neha Joshi',
    text: 'Modern equipment, hygienic environment, and a genuinely caring doctor. My kids actually look forward to dental check-ups now! Dr Agrawal has a special way of putting young patients at ease.',
    rating: 5,
    treatment: 'Family Dental Care',
    initials: 'NJ',
    date: 'November 2023',
    avatarColor: 'bg-teal-500',
  },
  {
    id: 6,
    name: 'Arjun Kapoor',
    text: "I had severe toothache and Dr Agrawal saw me the same day. The treatment was quick, effective, and very reasonably priced. The clinic is conveniently located. I've now switched all my dental care here.",
    rating: 5,
    treatment: 'Emergency Care',
    initials: 'AK',
    date: 'October 2023',
    avatarColor: 'bg-orange-500',
  },
]
