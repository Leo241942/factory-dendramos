import './GetStarted.css';

export default function GetStarted() 
{
  return (
    <div className="getstarted-Container">
     
      <div className="getstarted-block">
        <div className="getstarted-text">
           <p className="easyuse-text">Want anything to be easy with LaslesVPN.</p>
           <p className="provide-text">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <div>
              <a className="getstarted-button"  href='#'>Get Started</a>
            </div>
        </div>
      </div>

      <img className="getstarted-image" srcSet="/images/human.png" alt='human use vpn'/>
    </div>
  );
}