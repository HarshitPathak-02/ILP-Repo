using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ConsoleApp1;

public class Program
{
    static void Main(string[] args)
    {
        //Logger log = GetLogger("file");
        //log.Log();

        ILoggerInterface logInterface = GetLogger2("file");
        logInterface.Log();

    }

    private static Logger GetLogger(string type)
    {
        if (type == "db")
        {
            return new LogDb();
        }
        else if (type == "cloud")
        {
            return new LogCloud();
        }

        return new LogFile();
    }
    private static ILoggerInterface GetLogger2(string type)
    {
        if (type == "db")
        {
            return new LogDbInterface();
        }
        else if (type == "cloud")
        {
            return new LogCloudInterface();
        }

        return new LogFileInterface();
    }
}
