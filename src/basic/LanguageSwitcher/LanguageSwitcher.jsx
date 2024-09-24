export default function LanguageSwitcher({onLanguageChange}){

const handleLangChange=(e)=>{
e.preventDefault()
onLanguageChange(e.currentTarget.dataset.lang)

}

    return<>
    <ul
        className="nav justify-content-center  "
    >
        <li className="nav-item">
            <a className="nav-link active" data-lang='AR' href="#" aria-current="page" onClick={handleLangChange}
                >Arab</a
            >
        </li>
        <li className="nav-item">
            <a className="nav-link" data-lang='FR' href="#" onClick={handleLangChange}>Français</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" data-lang='EN' href="#" onClick={handleLangChange}>English</a>
        </li>
    </ul>
    
    
    
    </>
}