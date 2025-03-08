using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class Student
    {
        public string Name { get; set; }
        public int RollNo { get; set; }
        public string Course { get; set; }
        public int Age { get; set; }

    }

    class Program
    {

        static void Main(string[] args)
        {
            Student s1 = new Student
            {
                Name = "Harshit",
                RollNo = 25,
                Course = "Computer Science",
                Age = 21
            };

            Student s2 = new Student
            {
                Name = "Rahul",
                RollNo = 20,
                Course = "Machine Learning",
                Age = 22
            };

            Student s3 = new Student
            {
                Name = "Devraj",
                RollNo = 30,
                Course = "English Speaking",
                Age = 24
            };

            Console.WriteLine("Student 1 Details:");
            Console.WriteLine($"Name: {s1.Name}, Roll Number: {s1.RollNo}, Course: {s1.Course}, Age: {s1.Age}\n");

            Console.WriteLine("Student 2 Details:");
            Console.WriteLine($"Name: {s2.Name}, Roll Number: {s2.RollNo}, Course: {s2.Course}, Age: {s2.Age}\n");

            Console.WriteLine("Student 3 Details:");
            Console.WriteLine($"Name: {s3.Name}, Roll Number: {s3.RollNo}, Course: {s3.Course}, Age: {s3.Age}\n");
        }
    }
}
