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
         <a href='#getstarted' >About</a>
         <a href='#features'>Features</a>
         <a href='#choooseplan'>Fricing</a>
         <a href='#testimonials'>Testimonials</a>
       </nav>
      
       
       <div className={styles['buttons']}>
         <a className={styles['signin']} href='#' >Sigh In</a>
         <a className={styles['signup']} href='#' >Sigh Up</a>
       </div>
      </div>
    </header >
  )
}
