using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public interface ILoggerInterface
    {
        void Log();
    }

    public class LogDbInterface : ILoggerInterface
    {
        public void Log()
        {
            Console.WriteLine("Log to db through interface");
        }
    }

    public class LogCloudInterface : ILoggerInterface
    {
        public void Log()
        {
            Console.WriteLine("Log to cloud through interface");
        }
    }

    public class LogFileInterface : ILoggerInterface
    {
        public void Log()
        {
            Console.WriteLine("Log to file through interface");
        }
    }
}
