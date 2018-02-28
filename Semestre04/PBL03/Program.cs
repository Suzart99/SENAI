using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Rextester
{
    public class Program
    {
        public static void Main(string[] args)
        {
           String op = "cadastrar";
            
            op = Console.ReadLine();
         
            
            switch(op){
                case "Cadastrar":
                Console.Write("Entrou");
                break;
                default:
                Console.Write("Entrou no Default");
                break;
                
                
                
        }
    }
}
}