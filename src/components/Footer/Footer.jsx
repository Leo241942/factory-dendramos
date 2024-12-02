import styles from "./Footer.module.css";

export default function Foooter() {
  
    const product= ["Download", "Pricing", "Locations", "Server", "Blog"];
    const engage= ["LaslesVPN ? ", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"];
    const earnMoney= ["Affiliate", "Become Partner"];
    return (
        <footer className={styles.footerContainer}>
            
            <div className={styles.footerleftPanel}>
              <div className={styles.logoContainer}>
                  <img srcSet="\images\logo.png" />
                   <h1>LaslesVPN</h1>
              </div>   
              <p className={styles.footerDescription}><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</p>
           
              <div className={styles.footerButtons}>
                 <button className={styles.footerButton}><i class="ri-twitter-fill"></i></button>
                 <button className={styles.footerButton}><i class="ri-instagram-line"></i></button>
              </div>

              <p className={styles.footerRights}>©2020Lasles<strong>VPN</strong></p>
            </div>

            <div className={styles.footerrightPanel}>
              <div className={styles.footerListContainer}>
                 <h1>Product</h1>

                 <div className={styles.lists}>
                   {
                        product.map((text, index) => 
                        (   
                            <p>{text}</p>
                        ))
                   }
                 </div>
              </div>


              <div className={styles.footerListContainer}>
                 <h1>Engage</h1>

                 <div className={styles.lists}>
                   {
                        engage.map((text, index) => 
                        (   
                            <p>{text}</p>
                        ))
                   }
                 </div>
              </div>

              <div className={styles.footerListContainer}>
                 <h1>Earn Money</h1>

                 <div className={styles.lists}>
                   {
                        earnMoney.map((text, index) => 
                        (   
                            <p>{text}</p>
                        ))
                   }
                 </div>
              </div>
        
            </div>
        </footer>
    );
}