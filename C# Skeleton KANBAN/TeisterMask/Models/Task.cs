using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace TeisterMask.Models
{
   
        public class Task
        {
            public int Id { get; set; }

            [Required]
            public string Title { get; set; }

            [Required]
            public string Status { get; set; }
        }
    }
