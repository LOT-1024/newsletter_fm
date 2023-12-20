import { useState } from 'react'
import { Footer, FormCard, SuccessCard } from './components'
import { editDataObject } from './utils/EditDataObject'

function App() {
    const [dataApp, setDataApp] = useState({
        email: '',
        isSuccess: false
    })

    return (
        <main>
            <div className="flex justify-center md:h-screen md:items-center">
                <section>
                    {dataApp.isSuccess ? (
                        <SuccessCard
                            email={dataApp.email}
                            reset={(value) => {
                                editDataObject(setDataApp, 'isSuccess', value.successreset)
                                editDataObject(setDataApp, 'email', value.emailreset)
                            }}
                        />
                    ) : (
                        <FormCard
                            handleChange={(value) => editDataObject(setDataApp, 'email', value)}
                            handleSubmit={(value) => editDataObject(setDataApp, 'isSuccess', value)}
                            email={dataApp.email}
                        />
                    )}

                    <Footer />
                </section>
            </div>
        </main>
    )
}

export default App
