using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment3
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Customer cust = new PlatinumCustomerRegister
            {
                FirstName = "Harshit",
                LastName = "Pathak",
                Email = "harshit@harshit.com",

            };
            cust.Register();

            ICustomerDiscount discountCust = new PlatinumCustomerDiscount();
            //var discount = discountCust.GetDiscountPercentage();
            //Console.WriteLine($"The discount for the customer is: {discount}");

            IProcessOrder newOrder = new OrderProcessor(discountCust);
            newOrder.ProcessOrder();

            IDataStorage storedCust = new DatabaseStore(cust);
            storedCust.SaveCustomer();

            Leads lead = new Leads
            {
                Name = "Mahesh",
                ContactEmail = "mahesh@gmail.com"
            };
            lead.GeneralEnquiry();
        }
    }

    public class Customer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        //public CustomerType Type { get; set; }

        public virtual void Register()
        {
            Console.WriteLine("Customer registered!!");
        }

    }
    public class BronzeCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Bronze customer.");
        }
    }

    public class SilverCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Silver customer.");
        }
    }

    public class GoldCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Gold customer.");
        }
    }

    public class PlatinumCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Platinum customer.");
        }
    }

    public interface ICustomerDiscount
    {
        int GetDiscountPercentage();
    }

    public class BronzeCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 15;
        }
    }

    public class SilverCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 20;
        }
    }

    public class GoldCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 25;
        }
    }

    public class PlatinumCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 27;
        }
    }

    public interface IDataStorage
    {
        bool SaveCustomer();
    }

    public class DatabaseStore : IDataStorage
    {
        private Customer _customer;

        public DatabaseStore(Customer customer)
        {
            _customer = customer;
        }
        public bool SaveCustomer()
        {
            Console.WriteLine($"{_customer.FirstName} saved to database.");
            return true;
        }
    }

    public interface IProcessOrder
    {
        void ProcessOrder();
    }

    public class OrderProcessor : IProcessOrder
    {
        private ICustomerDiscount _customerDiscount;
        public OrderProcessor(ICustomerDiscount customerDiscount)
        {
            _customerDiscount = customerDiscount;
        }
        public void ProcessOrder()
        {
            var discount = _customerDiscount.GetDiscountPercentage();
            Console.WriteLine($"Order processed with {discount}% discount.");
            Console.WriteLine("Order Placed Successfully");
        }
    }

    public class Leads
    {
        public string Name { get; set; }
        public string ContactEmail { get; set; }

        public void GeneralEnquiry()
        {
            Console.WriteLine($"Enqiuring with lead: {Name}");
        }
    }
}





