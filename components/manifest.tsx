import { InView } from "@/components/ui/in-view";

export function Manifest() {
    return (
        <div className="min-h-[350px] w-full">
            <div className="flex items-center justify-center px-4 py-12">
                <InView
                    variants={{
                        hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    }}
                    viewOptions={{ margin: '0px 0px 0px 0px' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <div className='max-w-96'>
                        <h2 className='mb-4 text-3xl leading-tight text-center text-slate-900 dark:text-slate-100'>
                            Quiénes somos?                        
                        </h2>
                        <p className=''>
                            {/* <strong className='font-medium'>
                                Craft beautiful animated components with Motion-Primitives.
                            </strong>{' '} */}
                            Designed for developers and designers. The library leverages the
                            power of Motion, with intuitive APIs that simplifies creating
                            complex animations for any project. Start building more dynamic
                            interfaces today.
                        </p>
                        <br />
                        <p className=''>
                            {/* <strong className='font-medium'>
                                Craft beautiful animated components with Motion-Primitives.
                            </strong>{' '} */}
                            Designed for developers and designers. The library leverages the
                            power of Motion, with intuitive APIs that simplifies creating
                            complex animations for any project. Start building more dynamic
                            interfaces today.
                        </p>
                        <br />
                        <p className=''>
                            {/* <strong className='font-medium'>
                                Craft beautiful animated components with Motion-Primitives.
                            </strong>{' '} */}
                            Designed for developers and designers. The library leverages the
                            power of Motion, with intuitive APIs that simplifies creating
                            complex animations for any project. Start building more dynamic
                            interfaces today.
                        </p>
                    </div>
                </InView>
            </div>
        </div>
    );
}