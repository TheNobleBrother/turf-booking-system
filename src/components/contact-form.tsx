"use client"

import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, Phone, MapPin, User } from "lucide-react"

export default function ContactForm() {
    return (
        <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/10 h-full flex flex-col justify-center">
            <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-2">Get in touch</p>
                <h3 className="text-3xl font-black text-foreground">Send us a message</h3>
                <p className="text-muted-foreground mt-2">
                    Have a question or want to book a slot? Fill out the form and we'll get back to you shortly.
                </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Your Name" className="pl-10 bg-background border-border/40 focus-visible:ring-primary/20" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input type="email" placeholder="Email Address" className="pl-10 bg-background border-border/40 focus-visible:ring-primary/20" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input type="tel" placeholder="Phone Number" className="pl-10 bg-background border-border/40 focus-visible:ring-primary/20" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Textarea
                        placeholder="Your Message"
                        className="min-h-[120px] bg-background border-border/40 focus-visible:ring-primary/20 resize-none"
                    />
                </div>

                <Button className="w-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                    Send Enquiry
                </Button>
            </form>
        </div>
    )
}
