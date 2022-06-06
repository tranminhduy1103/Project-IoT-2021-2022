using IoT.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoT.Contracts
{
    public interface IRecordRepository : IBaseRepository<Record>
    {
        IQueryable<Record> FindByUserId(string userId, CancellationToken cancellationToken = default);
        Task<Record> FindLatest(string userId, CancellationToken cancellationToken = default);
    }
}
