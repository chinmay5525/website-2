
import './Navbar.css'
const Navbar = () => {
    function setIsMenuOpen(_arg0: boolean): void {
        throw new Error('Function not implemented.')
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top px-4">
                    <div className="container-fluid">
                        <svg width="100" height="43" viewBox="0 0 100 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.8 7H10.16L8.44 19.32L17.92 7H23.36L12.4 21L19.44 35H14L7.96 22.72L6.24 35H1.88L5.8 7ZM22.0884 26.8C22.0884 26.2133 22.1018 25.6133 22.1284 25C22.1818 24.36 22.2618 23.6933 22.3684 23C22.6884 20.68 23.1818 18.72 23.8484 17.12C24.5151 15.52 25.3018 14.2267 26.2084 13.24C27.1418 12.2267 28.1551 11.5067 29.2484 11.08C30.3418 10.6267 31.4884 10.4 32.6884 10.4C33.6751 10.4 34.5951 10.56 35.4484 10.88C36.3284 11.2 37.0884 11.72 37.7284 12.44C38.3684 13.16 38.8751 14.0933 39.2484 15.24C39.6218 16.3867 39.8084 17.7733 39.8084 19.4C39.8084 19.9333 39.7818 20.5067 39.7284 21.12C39.6751 21.7067 39.6084 22.3333 39.5284 23C39.2084 25.32 38.7018 27.28 38.0084 28.88C37.3151 30.48 36.5018 31.7867 35.5684 32.8C34.6351 33.7867 33.6084 34.5067 32.4884 34.96C31.3951 35.3867 30.2751 35.6 29.1284 35.6C28.1151 35.6 27.1818 35.44 26.3284 35.12C25.4751 34.8 24.7284 34.2933 24.0884 33.6C23.4751 32.9067 22.9818 32 22.6084 30.88C22.2618 29.76 22.0884 28.4 22.0884 26.8ZM29.7684 31.08C30.3818 31.08 30.9818 30.9467 31.5684 30.68C32.1551 30.4133 32.6884 29.9733 33.1684 29.36C33.6751 28.7467 34.1151 27.92 34.4884 26.88C34.8884 25.84 35.1951 24.5467 35.4084 23C35.4884 22.4667 35.5418 21.96 35.5684 21.48C35.5951 21 35.6084 20.5467 35.6084 20.12C35.6084 19.1333 35.5151 18.3067 35.3284 17.64C35.1684 16.9733 34.9284 16.44 34.6084 16.04C34.2884 15.64 33.9018 15.36 33.4484 15.2C33.0218 15.0133 32.5551 14.92 32.0484 14.92C31.4084 14.92 30.7951 15.0533 30.2084 15.32C29.6218 15.5867 29.0751 16.0267 28.5684 16.64C28.0884 17.2533 27.6618 18.08 27.2884 19.12C26.9151 20.16 26.6218 21.4533 26.4084 23C26.2484 24.12 26.1684 25.1067 26.1684 25.96C26.1684 26.92 26.2484 27.7333 26.4084 28.4C26.5951 29.04 26.8484 29.56 27.1684 29.96C27.4884 30.36 27.8618 30.6533 28.2884 30.84C28.7418 31 29.2351 31.08 29.7684 31.08ZM41.2672 26.84C41.2672 26.2533 41.2939 25.6533 41.3472 25.04C41.4005 24.4 41.4805 23.72 41.5872 23C41.9072 20.76 42.3605 18.88 42.9472 17.36C43.5605 15.84 44.2805 14.6133 45.1072 13.68C45.9339 12.72 46.8272 12.04 47.7872 11.64C48.7739 11.2133 49.7872 11 50.8272 11H55.3472L56.4672 3H60.5472L56.0672 35H47.4672C46.5872 35 45.7605 34.8533 44.9872 34.56C44.2405 34.2667 43.5872 33.8 43.0272 33.16C42.4939 32.52 42.0672 31.68 41.7472 30.64C41.4272 29.6 41.2672 28.3333 41.2672 26.84ZM52.5872 30.48L54.7072 15.52H50.7072C50.1472 15.52 49.6005 15.64 49.0672 15.88C48.5605 16.12 48.0805 16.5333 47.6272 17.12C47.1739 17.68 46.7739 18.44 46.4272 19.4C46.0805 20.36 45.8139 21.56 45.6272 23C45.4672 24.0933 45.3872 25.04 45.3872 25.84C45.3872 26.72 45.4672 27.4667 45.6272 28.08C45.7872 28.6667 46.0005 29.1467 46.2672 29.52C46.5605 29.8667 46.9072 30.12 47.3072 30.28C47.7072 30.4133 48.1339 30.48 48.5872 30.48H52.5872ZM60.3297 26.84C60.3297 26.2533 60.3564 25.6533 60.4097 25.04C60.463 24.4 60.543 23.72 60.6497 23C60.9697 20.76 61.423 18.88 62.0097 17.36C62.623 15.84 63.343 14.6133 64.1697 13.68C64.9964 12.72 65.8897 12.04 66.8497 11.64C67.8364 11.2133 68.8497 11 69.8897 11H73.7697C74.383 11 74.9564 11.0933 75.4897 11.28C76.023 11.4667 76.4897 11.7733 76.8897 12.2C77.2897 12.6267 77.5964 13.1867 77.8097 13.88C78.0497 14.5467 78.1697 15.3733 78.1697 16.36C78.1697 16.68 78.1564 17.0267 78.1297 17.4C78.103 17.7467 78.063 18.1067 78.0097 18.48C77.7964 19.8933 77.4764 21.08 77.0497 22.04C76.6497 23 76.1697 23.7733 75.6097 24.36C75.0497 24.9467 74.423 25.36 73.7297 25.6C73.063 25.84 72.3697 25.96 71.6497 25.96H64.4897C64.543 27.56 64.863 28.72 65.4497 29.44C66.063 30.1333 66.7964 30.48 67.6497 30.48H75.1297L74.5297 35H66.5297C65.6497 35 64.823 34.8533 64.0497 34.56C63.303 34.2667 62.6497 33.8 62.0897 33.16C61.5564 32.52 61.1297 31.68 60.8097 30.64C60.4897 29.6 60.3297 28.3333 60.3297 26.84ZM71.4897 21.48C71.7564 21.48 72.0364 21.4267 72.3297 21.32C72.623 21.1867 72.8897 20.9733 73.1297 20.68C73.3697 20.3867 73.5697 20 73.7297 19.52C73.8897 19.0133 73.9697 18.4 73.9697 17.68C73.9697 16.9067 73.8097 16.36 73.4897 16.04C73.1697 15.6933 72.783 15.52 72.3297 15.52H69.7697C68.7564 15.52 67.8097 15.9867 66.9297 16.92C66.0764 17.8267 65.4097 19.3467 64.9297 21.48H71.4897ZM79.1588 26.8C79.1588 26.2133 79.1721 25.6133 79.1988 25C79.2521 24.36 79.3321 23.6933 79.4388 23C79.7588 20.68 80.2521 18.72 80.9188 17.12C81.5854 15.52 82.3721 14.2267 83.2788 13.24C84.2121 12.2267 85.2254 11.5067 86.3188 11.08C87.4121 10.6267 88.5588 10.4 89.7588 10.4C90.7454 10.4 91.6654 10.56 92.5188 10.88C93.3988 11.2 94.1588 11.72 94.7988 12.44C95.4388 13.16 95.9454 14.0933 96.3188 15.24C96.6921 16.3867 96.8788 17.7733 96.8788 19.4C96.8788 19.9333 96.8521 20.5067 96.7988 21.12C96.7454 21.7067 96.6788 22.3333 96.5988 23C96.2788 25.32 95.7721 27.28 95.0788 28.88C94.3854 30.48 93.5721 31.7867 92.6388 32.8C91.7054 33.7867 90.6788 34.5067 89.5588 34.96C88.4654 35.3867 87.3454 35.6 86.1988 35.6C85.1854 35.6 84.2521 35.44 83.3988 35.12C82.5454 34.8 81.7988 34.2933 81.1588 33.6C80.5454 32.9067 80.0521 32 79.6788 30.88C79.3321 29.76 79.1588 28.4 79.1588 26.8ZM86.8388 31.08C87.4521 31.08 88.0521 30.9467 88.6388 30.68C89.2254 30.4133 89.7588 29.9733 90.2388 29.36C90.7454 28.7467 91.1854 27.92 91.5588 26.88C91.9588 25.84 92.2654 24.5467 92.4788 23C92.5588 22.4667 92.6121 21.96 92.6388 21.48C92.6654 21 92.6788 20.5467 92.6788 20.12C92.6788 19.1333 92.5854 18.3067 92.3988 17.64C92.2388 16.9733 91.9988 16.44 91.6788 16.04C91.3588 15.64 90.9721 15.36 90.5188 15.2C90.0921 15.0133 89.6254 14.92 89.1188 14.92C88.4788 14.92 87.8654 15.0533 87.2787 15.32C86.6921 15.5867 86.1454 16.0267 85.6388 16.64C85.1588 17.2533 84.7321 18.08 84.3588 19.12C83.9854 20.16 83.6921 21.4533 83.4788 23C83.3188 24.12 83.2388 25.1067 83.2388 25.96C83.2388 26.92 83.3188 27.7333 83.4788 28.4C83.6654 29.04 83.9188 29.56 84.2388 29.96C84.5588 30.36 84.9321 30.6533 85.3588 30.84C85.8121 31 86.3054 31.08 86.8388 31.08Z" fill="#F6320B" />
                            <rect x="82" width="18" height="5" fill="#F6320B" />
                        </svg>


                        {/* Hamburger Menu */}
                        <button
                            className="border-0 bg-transparent"
                            onClick={() => setIsMenuOpen(!setIsMenuOpen)}
                            aria-label="Toggle navigation"
                        >
                            <div className="d-flex flex-column gap-2">
                                <div style={{
                                    height: '3px',
                                    width: '30px',
                                    backgroundColor: '#ff3e00',
                                    borderRadius: '2px'
                                }}></div>
                                <div style={{
                                    height: '3px',
                                    width: '30px',
                                    backgroundColor: '#ff3e00',
                                    borderRadius: '2px'
                                }}></div>
                            </div>
                        </button>
                    </div>
                </nav>
    </div>
  )
}

export default Navbar
