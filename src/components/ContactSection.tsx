
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';

const MotionDiv = motion.div;

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string()
    .min(5, 'Subject must be at least 5 characters')
    .required('Subject is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      resetForm();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      ref={ref}
      className="min-h-screen py-20 px-8 md:px-16 lg:px-24 segmented-panel relative"
    >
      <div className="space-y-12 max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-iron-gold text-center text-iron-glow mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-30 h-0.5 bg-gradient-to-r from-iron-gold to-iron-blue mx-auto mb-8" />
          <p className="text-center text-iron-gold opacity-80 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and build something extraordinary together.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col items-start space-y-8">
              <h3 className="text-xl md:text-2xl font-orbitron text-iron-blue font-bold">
                LET'S CONNECT
              </h3>

              <div className="flex flex-col items-start space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-iron-gold flex items-center justify-center animate-glow-pulse">
                    <span className="text-iron-black font-bold">📧</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-iron-gold font-bold">Email</span>
                    <span className="text-iron-blue">santhosh525212@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-iron-blue flex items-center justify-center animate-glow-pulse">
                    <span className="text-iron-black font-bold">📱</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-iron-gold font-bold">Phone</span>
                    <span className="text-iron-blue">+91 8220305240</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-iron-gold flex items-center justify-center animate-glow-pulse">
                    <span className="text-iron-black font-bold">📍</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-iron-gold font-bold">Location</span>
                    <span className="text-iron-blue">Coimbatore
                      
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-iron-gold text-md opacity-80 leading-relaxed">
                Available for freelance projects and full-time opportunities. 
                Always excited to discuss innovative ideas and challenging projects.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Formik
              initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <div className="space-y-6">
                    <Field name="name">
                      {({ field }: any) => (
                        <div className="w-full">
                          <Input
                            {...field}
                            placeholder="Your Name"
                            className={`bg-iron-900 border-2 ${
                              errors.name && touched.name ? "border-red-500" : "border-iron-gold"
                            } text-iron-gold text-md placeholder:text-iron-gold placeholder:opacity-60 focus:border-iron-blue focus:shadow-lg focus:shadow-iron-blue/50 tech-border`}
                          />
                          <ErrorMessage name="name">
                            {(msg) => (
                              <p className="text-red-500 text-sm mt-1">
                                {msg}
                              </p>
                            )}
                          </ErrorMessage>
                        </div>
                      )}
                    </Field>

                    <Field name="email">
                      {({ field }: any) => (
                        <div className="w-full">
                          <Input
                            {...field}
                            type="email"
                            placeholder="Your Email"
                            className={`bg-iron-900 border-2 ${
                              errors.email && touched.email ? "border-red-500" : "border-iron-gold"
                            } text-iron-gold text-md placeholder:text-iron-gold placeholder:opacity-60 focus:border-iron-blue focus:shadow-lg focus:shadow-iron-blue/50 tech-border`}
                          />
                          <ErrorMessage name="email">
                            {(msg) => (
                              <p className="text-red-500 text-sm mt-1">
                                {msg}
                              </p>
                            )}
                          </ErrorMessage>
                        </div>
                      )}
                    </Field>

                    <Field name="subject">
                      {({ field }: any) => (
                        <div className="w-full">
                          <Input
                            {...field}
                            placeholder="Subject"
                            className={`bg-iron-900 border-2 ${
                              errors.subject && touched.subject ? "border-red-500" : "border-iron-gold"
                            } text-iron-gold text-md placeholder:text-iron-gold placeholder:opacity-60 focus:border-iron-blue focus:shadow-lg focus:shadow-iron-blue/50 tech-border`}
                          />
                          <ErrorMessage name="subject">
                            {(msg) => (
                              <p className="text-red-500 text-sm mt-1">
                                {msg}
                              </p>
                            )}
                          </ErrorMessage>
                        </div>
                      )}
                    </Field>

                    <Field name="message">
                      {({ field }: any) => (
                        <div className="w-full">
                          <Textarea
                            {...field}
                            placeholder="Your Message"
                            rows={6}
                            className={`bg-iron-900 border-2 ${
                              errors.message && touched.message ? "border-red-500" : "border-iron-gold"
                            } text-iron-gold text-md placeholder:text-iron-gold placeholder:opacity-60 focus:border-iron-blue focus:shadow-lg focus:shadow-iron-blue/50 tech-border resize-y`}
                          />
                          <ErrorMessage name="message">
                            {(msg) => (
                              <p className="text-red-500 text-sm mt-1">
                                {msg}
                              </p>
                            )}
                          </ErrorMessage>
                        </div>
                      )}
                    </Field>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full glow-button font-orbitron font-bold text-md py-6 hover:translate-y-[-2px]"
                    >
                      {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};
