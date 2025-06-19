
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '8a35860d-2246-47cd-9b08-4e1cd7641285',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 glow-text">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or simply chat about technology and web development. Feel free to reach out!
                </p>
              </div>

              <div className="section-glow p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-primary text-lg">adityavishakama4@gmail.com</p>
              </div>

              <div className="section-glow p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-4">Social Links</h4>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer glow-button">
                    <span className="text-sm font-bold">Li</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer glow-button">
                    <span className="text-sm font-bold">Gh</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-2">Coming soon...</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="section-glow p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full glow-button bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
