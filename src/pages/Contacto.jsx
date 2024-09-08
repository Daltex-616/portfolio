import React from 'react'

export const Contacto = () => {
  return (
    <>
        <section className='form'>
            <h2 className='form__title'>Contacto</h2>
            <form action="" className='form__form'>
                <div className='form__input-container'>
                    <label htmlFor="">Nombre
                        <input type="text" placeholder="Fulanito" name="" id="" />
                    </label>
                </div>
                <div className='form__input-container'>
                    <label htmlFor="">Apellido
                        <input type="text" placeholder="Fulanito" name="" id="" />
                    </label>
                </div>
                <div className='form__input-container'>
                    <label htmlFor="">Email
                        <input type="email" placeholder="Fulanito" name="" id="" />
                    </label>
                </div>
                <div className='form__input-container'>
                    <label htmlFor="">Mensaje
                        <textarea placeholder='escribime algo :3' name="" id=""></textarea>
                    </label>
                </div>
                <div className='form__input-container'>
                    <input type="submit" />
                </div>
            </form>
        </section>
    
    </>
  )
}
