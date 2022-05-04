using AutoMapper;
using IoT.Core.Entities;

namespace IoT.Api.DataObjects
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Role, RoleDTO>();
            CreateMap<RoleDTO, Role>()
                .ForMember(ent => ent.Id, opt => opt.Ignore());

            CreateMap<User, UserDTO>()
                .ForMember(dto => dto.Roles, opt => opt.MapFrom(usr => usr.UserRoles.Select(u_r => u_r.Role!.Name)));
            CreateMap<UserDTO, User>();
            CreateMap<CreateUserDTO, User>();

            CreateMap<Record, RecordDTO>();
            CreateMap<RecordDTO, Record>()
                .ForMember(ent => ent.Id, opt => opt.Ignore());
        }
    }
}
