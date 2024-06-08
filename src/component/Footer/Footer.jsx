const Footer = () => {
    const footerStyle = {
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return (
    <div>
        <footer className="bg-dark text-white " style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-center">All Rights Reserved 2024 @VijayMakkad</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
export default Footer