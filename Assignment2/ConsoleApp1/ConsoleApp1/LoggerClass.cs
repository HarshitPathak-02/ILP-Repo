using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public abstract class Logger
    {
        public abstract void Log();
    }

    public class LogDb : Logger
    {
        public override void Log()
        {
            Console.WriteLine("Logging to database through abstract class");
        }
    }

    public class LogCloud : Logger
    {
        public override void Log()
        {
            Console.WriteLine("Logging to cloud through abstract class");
        }
    }

    public class LogFile : Logger
    {
        public override void Log()
        {
            Console.WriteLine("Logging to file through abstract class");
        }
    }
}
