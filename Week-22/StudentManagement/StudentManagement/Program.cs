using System;
using System.Collections.Generic;

namespace Students
{
    class Program
    {
        static void Main(String[] args)
        {

            var students = new List<Dictionary<string, string>>();

            while (true)
            {

                /* Next, create a dict, whose keys are the same as the variable names you've
                 * been using. Set their value equal to "None", which is Python's version of 
                 * JavaScript's null. Refactor your calls to input such that they assign to
                 * the dictionary's values directly, rather than to variable names. It'll
                 * look very similar! */
                var student = new Dictionary<string, string>();

                Prompt("first name", student);
                Prompt("middle name", student);
                Prompt("last name", student);
                Prompt("address", student);
                Prompt("email", student);
                Prompt("phone number", student);

                // Prompt user for student"s identification information, and 
                //   save it into the dictionary.


                // Print everything to the console...
                Print(student);
                

                if (CheckInfo())
                    break;
            }

        }

        static void Prompt(string s, Dictionary<string, string> d)
        {
            Console.WriteLine("Enter the students " + s);
            d.Add(s, Console.ReadLine());
        }

        static void Print(Dictionary<string, string> d)
        {
            foreach (KeyValuePair<string, string> entry in d)
            {
                // do something with entry.Value or entry.Key
                Console.WriteLine(entry.Key + ": " + entry.Value);
            }
        }

        static bool CheckInfo()
        {
            Console.Write("Is this information correct? (Y/N)");


            if (Console.ReadLine().ToLower() == "y")
            {
                return true;
            }

            return false;
        }

    }
}
