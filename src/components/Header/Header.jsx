import styles from './Header.module.css';

export default function Header() 
{
  return (
    <header className={styles['header']}>
      <div className={styles['header-container']}>

       <div className={styles['logo-container']}>
         <img srcSet="/images/logo.png" alt='logo site' />
         <p>LaslesVPN</p>
       </div>

       <nav>
         <a href='#'>About</a>
         <a href='#'>Features</a>
         <a href='#'>Fricing</a>
         <a href='#'>Testimonials</a>
       </nav>
      
       
       <div className={styles['buttons']}>
         <a className={styles['signin']} href='#' >Sigh In</a>
         <a className={styles['signup']} href='#' >Sigh Up</a>
       </div>
      </div>
    </header >
  )
}
