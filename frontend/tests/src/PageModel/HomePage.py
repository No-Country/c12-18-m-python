class HomePage:
    def __init__(self, driver):
        self.driver = driver
        
    def click_on_login_link(self, target):
        self.driver.find_element_by_link_text(target).click()