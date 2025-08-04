
import { Mail, Phone, MapPin, Github, Linkedin, User } from 'lucide-react';
import Card from "./Card";


const ContactDetails = () => {

  const handleOpenSocialPage = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
        <User className="text-white  w-12 h-12 md:w-16 md:h-16" />
      </div>
      <h2 className="text-3xl text-black-800 mb-4 font-bold">Sooraj Vijayan T K</h2>
      <h5 className="text-2xl mb-5 text-blue-600 font-semibold">Software Engineer</h5>
      <p className="text-center md:text-justify ml-3 md:ml-none max-w-200 mb-8 text-lg text-gray-600">
        I am a Software Engineer with 3.5 years of professional experience in building modern, scalable web applications.
        My core specialization lies in frontend development using React.js and Next.js, where I focus on creating responsive,
        high-performance user interfaces. I am also proficient in backend technologies such as Node.js and Express, enabling me to contribute across the full stack when needed.
        With a strong foundation in JavaScript and a deep understanding of web architecture, I am passionate about delivering clean, maintainable code and intuitive user experiences.
        I continuously stay updated with the
        latest industry trends and best practices to build efficient, production-ready applications.
      </p>
      <div className="flex gap-8 flex-wrap ml-3 md:ml-none">
        <Card iconColor='text-blue-600' icon={Mail} text='soorajtk3@gmail.com' color='bg-white' />
        <Card iconColor='text-blue-600' icon={Phone} text='9567107681' color='bg-white' />
        <Card iconColor='text-blue-600' icon={MapPin} text='Kannur, Kerala' color='bg-white' />
      </div>
      <div className="flex gap-4 mt-10 mb-6">
        <Card isSocial height='h-12' iconTextColor='text-white'
          iconColor='text-white' icon={Linkedin} text='Linkedin' color='bg-blue-600'
          onClick={() => handleOpenSocialPage('https://www.linkedin.com/in/soorajvijayantk/')}
        />
        <Card isSocial iconTextColor='text-white' iconColor='text-white'
          icon={Github} text='Github' color='bg-gray-800'
          onClick={() => handleOpenSocialPage('https://github.com/soorajtk3')}
        />
      </div>
    </div>
  )


}

export default ContactDetails;
