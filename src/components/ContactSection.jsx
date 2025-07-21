import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch } from "lucide-react"
import {cn} from "@/lib/Utils"
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission
            setIsSubmitting(true);
            setTimeout(() => {
                toast({
                    title: "Message has been sent",
                    description: "Thank you for your message. I'll get back to you soon.",
                    
                }); 
                setIsSubmitting(false);
            }, 1500);
            
        };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in<span className="text-primary">Touch</span> 
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                have a Project in mind or want to collaborate? feel free to reach out.
                I am always open to discussing new projects and ideas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:pavan.balaraaju@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">pavan.balaraaju@gmail.com</a>
                            </div>
                        </div>
                         <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:9849454112" className="text-muted-foreground hover:text-primary transition-colors">+91 9849454112</a>
                            </div>
                        </div>
                                                <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">Bangalore</a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/pavankumar-balaraju-69b7aa2bb/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="hover:text-primary transition-colors" />
                            </a>
                            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                                <Facebook className="hover:text-primary transition-colors" />
                            </a>
                            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                                <Instagram className="hover:text-primary transition-colors" />
                            </a>
                            <a href="https://www.twitch.tv/your-profile" target="_blank" rel="noopener noreferrer">
                                <Twitch className="hover:text-primary transition-colors"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text" id="name" required className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" id="email" required className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea id="message" required className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" 
                        disabled = {isSubmitting}
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                        )}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}