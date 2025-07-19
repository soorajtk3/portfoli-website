
import { Mail, Phone, MapPin, Github, Linkedin, User } from 'lucide-react';
import Card from "./Card";


const ContactDetails = () => {

  const handleOpenSocialPage = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mt-20 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
        <User size={64} className="text-white" />
      </div>
      <h2 className="text-3xl text-black-800 mb-4 font-bold">Sooraj Vijayan T K</h2>
      <h5 className="text-2xl mb-5 text-blue-600 font-semibold">Software Engineer</h5>
      <p className="text-center max-w-200 mb-8 text-lg text-gray-600">
        Software Engineer with 3+ years of hands-on experience in designing, developing,
        and deploying web applications using React.js, Next.js, and Node.js. Proficient in
        JavaScript and related technologies, with expertise in building responsive,
        high-performance user interfaces and scalable backend systems.
      </p>
      <div className="flex gap-8 flex-wrap">
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
