using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.Threading;

namespace AutomatedKKBTMiner
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("The program will navigate to KKBT Login Page... Please stand by.");

            var accounts = new Dictionary<int, string>()
            {
                { number, "password" },
                { number2, "password2" },
                { number3, "password3" },
                { number4, "password4" },
                { number5, "password5" }
            };

            foreach (var account in accounts)
            {
                //create instance of Chrome browser
                IWebDriver driver = new ChromeDriver();

                //navigate to KKBT
                driver.Navigate().GoToUrl("https://www.kkbt.in/#/login");

                //wait for page to load
                Thread.Sleep(4000);

                //get and fill input fields, get button element.
                IWebElement numberField = driver.FindElement(By.CssSelector("input[type='text']"));
                IWebElement passwordField = driver.FindElement(By.CssSelector("input[type='password']"));
                IWebElement button = driver.FindElement(By.TagName("button"));
                numberField.SendKeys(account.Key.ToString());
                passwordField.SendKeys(account.Value.ToString());
                button.Click();
                Thread.Sleep(4000);
                IWebElement popClose = driver.FindElement(By.ClassName("close"));
                popClose.Click();
                IWebElement miningWorkBtn = driver.FindElement(By.ClassName("bottom"));

                //we need to scroll on this page
                IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
                js.ExecuteScript("window.scrollBy(0,800)", "");
                miningWorkBtn.Click();
                Thread.Sleep(4000);
                IWebElement startMining = driver.FindElement(By.CssSelector("button"));
                startMining.Click();
                Thread.Sleep(4000);
                driver.Quit();
            }            
        }
    }
}
