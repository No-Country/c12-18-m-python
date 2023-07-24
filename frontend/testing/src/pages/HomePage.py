from frontend.testing.src.webdriver.WebDriver import Webdriver


URL: str = "http://localhost:3000/"  # URL of the Home Page


class HomePage:
    """Class for the Home Page"""

    # Elements
    button_book_now: str = "button-book-now"  # ID of the Book Now button

    def __init__(self, driver: Webdriver, wait):
        self.driver = driver
        self.wait = wait

    def do_click_book_now(self) -> None:
        """Click on the Book Now button"""
        self.driver.wait(HomePage.button_book_now).click()