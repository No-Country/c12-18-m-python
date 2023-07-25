from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait as WDW
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager

# Proxy and configs for setting up the driver.
from .Options import ArgumentOptions as AO, ExperimentalOptions as EO


class Webdriver:
    """
    A class representing a web driver.

    Attributes:
        driver (selenium.webdriver.Chrome): The Chrome web driver instance.
    """

    def __init__(self) -> None:
        """
        Initializes a new instance of the Webdriver class.
        """
        service: Service = Service(executable_path=ChromeDriverManager().install())
        options = Options()
        options.add_argument(AO.START_MAXIMIZED)
        options.add_argument(AO.IGNORE_SSL_ERRORS)
        options.add_argument(AO.IGNORE_CERTIFICATE_ERRORS)
        options.add_argument(AO.UNDETECTED_CONTROL)
        options.add_experimental_option(EO.USE_AUTOMATION_EXT, False)
        options.add_experimental_option(EO.EXCLUDE_SWITCHES, EO.ENABLE_LOGGING)
        options.add_experimental_option(EO.EXCLUDE_SWITCHES, EO.ENALE_AUTOMATION)
        self.driver = webdriver.Chrome(service=service, options=options)

    def wait(self, signer: str, value: str) -> object:
        LOCATOR_METHODS = {
            "XPATH": By.XPATH,
            "CSS_SELECTOR": By.CSS_SELECTOR,
            "NAME": By.NAME,
            "ID": By.ID,
            "LINK_TEXT": By.LINK_TEXT,
            "PARTIAL_LINK_TEXT": By.PARTIAL_LINK_TEXT,
            "TAG_NAME": By.TAG_NAME,
            "CLASS_NAME": By.CLASS_NAME,
        }

        locator_method = LOCATOR_METHODS.get(signer)
        if not locator_method:
            raise ValueError(f"Invalid signer: {signer}")

        return WDW(self.driver, 10).until(
            EC.element_to_be_clickable((locator_method, value))
        )

    def search_decorator(self, method_name: str) -> object:
        """
        Decorator to add search functionality to WebDriver class methods.

        Args:
            method_name (str): The name of the method to decorate.

        Returns:
            The decorated method.
        """

        def decorator():
            """
            Decorator function to wrap the decorated method.

            Returns:
                The wrapped method.
            """

            def wrapper(self, signer: str, value: str):
                """
                Wrapper function to add search functionality to the decorated method.

                Args:
                    signer (str): The locator method to use. Must be one of the following: "XPATH", "CSS_SELECTOR", "NAME", "ID", "LINK_TEXT", "PARTIAL_LINK_TEXT", "TAG_NAME", "CLASS_NAME".
                    value (str): The value to search for.

                Returns:
                    The matching element(s).
                """
                LOCATOR_METHODS = {
                    "XPATH": By.XPATH,
                    "CLASS_NAME": By.CLASS_NAME,
                    "CSS_SELECTOR": By.CSS_SELECTOR,
                    "ID": By.ID,
                    "LINK_TEXT": By.LINK_TEXT,
                    "NAME": By.NAME,
                    "PARTIAL_LINK_TEXT": By.PARTIAL_LINK_TEXT,
                    "TAG_NAME": By.TAG_NAME,
                }

                locator_method = LOCATOR_METHODS.get(signer)
                if not locator_method:
                    raise ValueError(f"Invalid signer: {signer}")

                method = getattr(self.driver, method_name)
                return method(locator_method, value)

            return wrapper

        return decorator

    @search_decorator("find_element")
    def find_element(self, signer: str, value: str) -> object:
        """
        Find a single element on the page using the specified locator method and value.

        Args:
            signer (str): The locator method to use. Must be one of the following: "XPATH", "CSS_SELECTOR", "NAME", "ID", "LINK_TEXT", "PARTIAL_LINK_TEXT", "TAG_NAME", "CLASS_NAME".
            value (str): The value to search for.

        Returns:
            The matching element.
        """

    @search_decorator("find_elements")
    def find_elements(self, signer: str, value: str) -> list:
        """
        Find multiple elements on the page using the specified locator method and value.

        Args:
            signer (str): The locator method to use. Must be one of the following: "XPATH", "CSS_SELECTOR", "NAME", "ID", "LINK_TEXT", "PARTIAL_LINK_TEXT", "TAG_NAME", "CLASS_NAME".
            value (str): The value to search for.

        Returns:
            A list of matching elements.
        """

    def enter(self) -> str:
        """Press the ENTER key"""
        return Keys.ENTER

    def open_new_tab(self) -> None:
        self.driver.execute_script("window.open('');")

    def key_escape(self) -> None:
        """Press the ESCAPE key"""
        webdriver.ActionChains(self.driver).send_keys(Keys.ESCAPE).perform()
