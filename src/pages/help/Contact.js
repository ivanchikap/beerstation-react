const Contact = () => {
    return (
        <div className='contact'>
            <h3>Contact Us</h3>
            <form action="">
                <label>
                    <span>Your email: </span>
                    <input type="email" name='email' required/>
                </label>
                <label>
                    <span>Your message: </span>
                    <textarea name='message' required></textarea>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;