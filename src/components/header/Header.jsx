import './index.css'
import Logo from '../../assets/images/logo.svg'

export default function Header() {
    return (
        <header>
            
            <img src={Logo} alt="logo" />
            
            <ul>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        
        </header>
    )
}

