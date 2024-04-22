function Contact() {
    return (
     <div className="text-center p-4 my-32 md:my-4">
         <h1 className="font-bold text-3xl p-4 m-4">There are number of ways you can contact us</h1>
         <p>Support: +91 123456789</p>
         <p>Email us at: bietsy@gmail.com</p>  
         <form className="md:w-3/12 mx-auto my-4 p-4 border-2 flex flex-col items-center rounded-md">
             <input className="bg-neutral-200 rounded-md p-2 outline-zinc-400 text-center w-full" placeholder="Enter your query" id="contact-by-email"/>
             <button className="mt-4 w-full p-2 rounded-md bg-orange-500 text-white font-bold ">Send Email</button>
         </form>  
     </div>
    )
 }
 
 export default Contact;