using IoT.Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace IoT.Api.DataObjects
{
    [ModelBinder(typeof(MultipleSourcesModelBinder<RoleDTO>))]
    public class RoleDTO : BaseDTO<string>
    {
        [Required]
        public string Name { get; set; } = string.Empty;
    }
}
