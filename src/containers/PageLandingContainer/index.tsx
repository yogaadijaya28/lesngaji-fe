const PageLandingContainer = () => {

    return (
        <>

            <div className="container" style={{ maxWidth: '400px' }}>
                <div className="header">
                    <img src="/assets/img/me.png" className="rounded-circle" alt="AIGA MSU Logo" />
                    <h5>Qur&apos;an Verse Les Ngaji Bandung</h5>
                    <br/>
                    <h6>Belajar Qur&apos;an bersama teman-teman dan guru yang ramah di Les Ngaji Bandung! Yuk, ngobrol dulu lewat WhatsApp atau Instagram.
</h6>
                </div>
                <a href="https://wa.me/6283899890046?text=Bismillah%2C%20saya%20ingin%20mendaftar%20les%20ngaji.%20Mohon%20informasinya%20ya%2C%20Kak" className="link-card">
                    <div className="left-section">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="Icon" className="link-icon" />
                        <span className="highlight">WhatsApp</span>
                    </div>
                    <div className="menu-icon">⋮</div>
                </a>
                <a href="https://www.instagram.com/les_ngaji_bandung/" className="link-card">
                    <div className="left-section">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Icon" className="link-icon" />
                        <span className="highlight">Instagram</span>
                    </div>
                    <div className="menu-icon">⋮</div>
                </a>
                {/* <a href="https://t.me/UstadzMengaji?text=Bismillah%2C%20saya%20ingin%20mendaftar%20les%20ngaji.%20Mohon%20informasinya%20ya%2C%20Kak.
" className="link-card">
                    <div className="left-section">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111644.png" alt="Icon" className="link-icon" />
                        <span className="highlight">Telegram</span>
                    </div>
                    <div className="menu-icon">⋮</div>
                </a> */}
                {/* <a href="#" className="link-card">
                    <div className="left-section">
                        <img src="https://cdn-icons-png.flaticon.com/512/2301/2301129.png" alt="Icon" className="link-icon" />
                        <span className="highlight">Website</span>
                    </div>
                    <div className="menu-icon">⋮</div>
                </a> */}
            </div>



        </>
    )
}

export default PageLandingContainer