import { ReactNode } from "react";

type Prop = {
    children: ReactNode
    title: string
}

        export const AlertSuccess = ({ children, title }: Prop) => {
            return (
                <section>
                    <div className="my-2 bg-green-200 rounded-md text-green-800 px-4 py-3 shadow-md border-l-4 border-green-800" role="alert">
                        <div className="flex gap-1">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-7 h-7">
                                    <circle cx="12" cy="12" r="9" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-lg">{title}</p>
                                <div className="text-sm">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}