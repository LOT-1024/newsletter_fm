import { useState, useEffect } from 'react'
import { image2, image3, image0 } from '../assets'
import { editDataObject } from '../utils/EditDataObject'

const FormCard = ({ handleChange, handleSubmit, email }) => {
    const [dataForm, setDataForm] = useState({
        error: false,
        isDesktop: true,
    })

    const DESKTOP_BREAKPOINT = 768

    const features = [
        'Product discovery and building what matters',
        'Measuring to ensure updates are a success',
        'And much more!',
    ]

    function handleChangeInput(e) {
        editDataObject(setDataForm, 'error', false)
        handleChange(e.target.value)
    }

    function handleSubmitButton() {
        const regex =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!email.match(regex)) {
            editDataObject(setDataForm, 'error', true)
            return
        }

        handleSubmit(true)
    }

    const updateIsDesktop = () => {
        editDataObject(setDataForm, 'isDesktop', window.innerWidth >= DESKTOP_BREAKPOINT) // Adjust the breakpoint as needed
    }

    useEffect(() => {
        updateIsDesktop()
        // Event listener for window resize
        window.addEventListener('resize', updateIsDesktop)
        return () => {
            window.removeEventListener('resize', updateIsDesktop)
        }
    }, [])

    return (
        <div className="w-screen bg-White md:flex md:w-auto md:flex-row-reverse md:rounded-[2rem]">
            <img
                className="w-full md:m-5 md:h-[36rem] md:w-auto"
                src={dataForm.isDesktop ? image2 : image3}
                alt="image newsletter"
            />
            <div className="flex items-center justify-center md:w-[30rem] md:pt-5">
                <div className="w-80 py-10 md:w-96 md:py-20">
                    <h1 className="text-[2.5rem] font-bold text-DarkSlateGray md:text-5xl">
                        Stay updated!
                    </h1>

                    <p className="py-7 text-CharcoalGray">
                        Join 60,000+ product managers receiving monthly updates
                        on:
                    </p>
                    <ul className="text-CharcoalGray">
                        {features.map((feature, i) => (
                            <li key={i} className="mb-3 flex gap-5">
                                <img
                                    className="h-6 w-6"
                                    src={image0}
                                    alt="checkmark"
                                />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>
                    <fieldset className="mt-8">
                        <label className="flex justify-between text-xs font-bold">
                            <span className="text-DarkSlateGray">Email address</span>
                            <span className={`text-Tomato ${!dataForm.error && `hidden`}`}>
                                Valid email required
                            </span>
                        </label>
                        <input
                            onChange={handleChangeInput}
                            type="email"
                            placeholder="email@company.com"
                            className={`mt-2 w-full rounded-lg border-[2px] px-4 py-2 placeholder:text-sm ${
                                dataForm.error &&
                                `bg-orange-200 text-Tomato outline-Tomato`
                            }`}
                        />
                    </fieldset>

                    <button
                        onClick={handleSubmitButton}
                        className="my-4 h-12 w-full rounded-md bg-DarkSlateGray text-sm font-bold text-White hover:bg-gradient-to-br hover:from-Tomato hover:to-orange-400 hover:shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-Tomato"
                    >
                        Subscribe to monthly newsletter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormCard
