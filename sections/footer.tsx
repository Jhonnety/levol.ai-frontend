"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { AnimatedElement } from "../components/animated-element"

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

export const Footer = () => {

    return (
        <footer className="py-12 px-4 border-t border-border/20">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <AnimatedElement type="fade" direction="up" delay={0.1}>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl font-bold mb-4"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">
                                    Levol.ia
                                </span>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-sm text-muted-foreground mb-4"
                            >
                                Empowering businesses to level up through AI agents, process automation, and data analytics.
                            </motion.p>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex space-x-4"
                            >
                                {[
                                    <svg key="facebook" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>,
                                    <svg key="twitter" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>,
                                    <svg key="instagram" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                                            clipRule="evenodd"
                                        />
                                    </svg>,
                                ].map((icon, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        variants={fadeInUp}
                                        className="text-muted-foreground hover:text-accent transition-colors"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </AnimatedElement>

                    <AnimatedElement type="fade" direction="up" delay={0.2}>
                        <div>
                            <h3 className="font-bold mb-4">Solutions</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: "AI Agents", path: "/solutions/multi-channel-ai-agents" },
                                    { name: "Workflow Automation", path: "/solutions/advanced-workflow-automation" },
                                    { name: "Predictive Analytics", path: "/solutions/predictive-analytics-platform" },
                                    { name: "All Solutions", path: "/solutions" },
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                    >
                                        <Link href={item.path} className="text-muted-foreground hover:text-accent">
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedElement>

                    <AnimatedElement type="fade" direction="up" delay={0.3}>
                        <div>
                            <h3 className="font-bold mb-4">Company</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: "About Us", path: "/about" },
                                    { name: "Case Studies", path: "/case-studies" },
                                    { name: "Blog", path: "/blog" },
                                    { name: "Careers", path: "/careers" },
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                    >
                                        <Link href={item.path} className="text-muted-foreground hover:text-accent">
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedElement>

                    <AnimatedElement type="fade" direction="up" delay={0.4}>
                        <div>
                            <h3 className="font-bold mb-4">Contact</h3>
                            <ul className="space-y-2">
                                {[
                                    "hello@levol.ia",
                                    "+1 (555) 123-4567",
                                    <>
                                        123 AI Boulevard
                                        <br key={0} />
                                        San Francisco, CA 94105
                                    </>,
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                        className="text-muted-foreground"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedElement>
                </div>

                <AnimatedElement type="fade" direction="up" delay={0.5}>
                    <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm text-muted-foreground mb-4 md:mb-0"
                        >
                            &copy; {new Date().getFullYear()} Levol.ia. All rights reserved.
                        </motion.p>
                        <div className="flex space-x-6">
                            {[
                                { name: "Privacy Policy", path: "/privacy" },
                                { name: "Terms of Service", path: "/terms" },
                                { name: "Cookie Policy", path: "/cookies" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    whileHover={{ y: -2 }}
                                >
                                    <Link href={item.path} className="text-sm text-muted-foreground hover:text-accent">
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedElement>
            </div>
        </footer>
    )
}
