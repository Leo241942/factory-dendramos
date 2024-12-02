import "./HugeGlobalNetwork.css"

export default function HugeGlobalNetwork() 
{
    return (
      <div className="hugeglobal-container">
         <div className="hugeglobal-text">
            <h1>Huge Global Network of Fast VPN</h1>
            <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
         </div>
   
         <div className="hugeglobal-map-container">
           <img className="hugeglobal-map" srcSet="/images/hugeglobalnetwork/hugeGlobal.png" alt="map"/>
           <img className="sponsored" srcSet="/images/hugeglobalnetwork/sponsored.png"  alt="sponsored"/>
         </div>
      </div>
    );
  }