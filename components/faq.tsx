import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/motion-primitives/accordion';

export function FAQuestions() {
    return (
        <section id='faq'>
            <div className="w-full flex justify-center mb-20 mt-10">
                <div className='flex flex-col w-full max-w-2xl px-4 md:px-0'>
                    <span className='text-xs font-fold uppercase mb-3'>
                        <strong>Preguntas Frecuentes</strong>
                    </span>
                    <Accordion className='flex flex-col w-full divide-y divide-zinc-200 dark:divide-zinc-700'>
                        <AccordionItem value='getting-started'>
                            <AccordionTrigger className='py-0.5 text-left text-zinc-950 dark:text-zinc-50 text-sm font-medium uppercase mb-2 hover:underline'>
                                Getting Started
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className='text-zinc-500 dark:text-zinc-400'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='animation-properties'>
                            <AccordionTrigger className='py-0.5 text-left text-zinc-950 dark:text-zinc-50 text-sm font-medium uppercase mb-2 hover:underline'>
                                Animation Properties
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className='text-zinc-500 dark:text-zinc-400'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='advanced-usage'>
                            <AccordionTrigger className='py-0.5 text-left text-zinc-950 dark:text-zinc-50 text-sm font-medium uppercase mb-2 hover:underline'>
                                Advanced Usage
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className='text-zinc-500 dark:text-zinc-400'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='community-and-support'>
                            <AccordionTrigger className='py-0.5 text-left text-zinc-950 dark:text-zinc-50 text-sm font-medium uppercase mb-2 hover:underline'>
                                Community and Support
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className='text-zinc-500 dark:text-zinc-400'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
