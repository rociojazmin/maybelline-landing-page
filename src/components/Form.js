import React from 'react'

const Form = () => {
    return (
        <>
            {/* Container for demo purpose */}
            <div id='descuentos' className="container my-24 mx-auto md:px-6 xl:px-32">
                {/* Section: Design Block */}
                <section className="mb-32 text-center lg:text-left">
                    <div className="block rounded-lg bg-white  dark:bg-neutral-700">
                        <div className="relative isolate px-6 pt-14 lg:px-8  bg-white">
                            <div
                                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                                aria-hidden="true"
                            >
                                <div
                                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                />
                            </div>

                            <div className="flex flex-wrap items-center  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                                    <img
                                        src="https://www.maybelline.cl/~/media/mny/latam/chile/maquillaje-ojos/mascaras/lash%20sensational%20sky%20high/newproductmodule_lashsensational_skyhigh_600x900.jpg"
                                        alt="Trendy Pants and Shoes"
                                        className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                    />
                                </div>
                                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                                    <div className="px-6 py-12 md:px-12">
                                        <h2 className="mb-6 text-3xl font-bold secondary">
                                            ¿Querés recibir fabulosos descuentos?
                                            <br />
                                            <span className="text-secondary">
                                                Registrate con tu e-mail
                                            </span>
                                        </h2>
                                        <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                                            Te enviaremos descuentos y promociones a tu casilla de correo.
                                        </p>
                                        <div className="mb-6 flex-row md:mb-0 md:flex">
                                            <div
                                                className="relative mb-3 w-full md:mr-3 md:mb-0"
                                                data-te-input-wrapper-init=""
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="Escribe tu email aquí"
                                                    className="input input-bordered w-full"
                                                />

                                            </div>
                                            <button
                                                type='submit'
                                                className="btn bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                                                Suscribirme
                                            </button>
                                            <div
                                                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                                                aria-hidden="true"
                                            >
                                                <div
                                                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                                                    style={{
                                                        clipPath:
                                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
        </>

    )
}

export default Form