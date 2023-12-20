import { image1 } from '../assets'

const SuccessCard = ({ email, reset }) => {
    function resetButton() {
        reset(
          {
            'successreset': false,
            'emailreset': ''
          }
        )
    }

    return (
        <div className="bg-White px-8 pb-5 pt-40 md:h-auto md:w-[29rem] md:rounded-[2rem] md:p-12">
            <img src={image1} alt="success-mark" />
            <h1 className="mt-10 text-[2.5rem] font-bold leading-10 text-DarkSlateGray md:mt-7 md:text-5xl">
                Thanks for subscribing!
            </h1>

            <p className="mt-8 md:mt-6">
                A confirmation email has been sent to{' '}
                <span className="font-bold">{email}</span>. Please open it and
                click the button inside to confirm your subscription.
            </p>

            <button
                className="my-4 mt-72 h-12 w-full rounded-md bg-DarkSlateGray text-sm font-bold text-White hover:bg-gradient-to-br hover:from-Tomato hover:to-orange-400 hover:shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-Tomato md:mt-8"
                onClick={resetButton}
            >
                Dismiss message
            </button>
        </div>
    )
}
export default SuccessCard
