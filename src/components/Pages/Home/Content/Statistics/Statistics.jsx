import "./Statistics.css"

export default function Statistics() {
    return (
        <div className="statistics-container">
            <div className="statistic">
                <img src="\images\statistics\user.png" alt="users" />
                <div className="statistics-text">
                    <h1>90+</h1>
                    <p>Users</p>
                </div>
            </div>
            <div className="statistic">
                <img src="\images\statistics\location.png" alt="locations" />
                <div className="statistics-text">
                    <h1>30+</h1>
                    <p>Locations</p>
                </div>
            </div>
            <div className="statistic">
                <img src="\images\statistics\server.png" alt="servers" />
                <div className="statistics-text">
                    <h1>50+</h1>
                    <p>Servers</p>
                </div>
            </div>
        </div>
    );
}