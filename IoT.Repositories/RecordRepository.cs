using IoT.Contracts;
using IoT.Core.Database;
using IoT.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoT.Repository
{
    public class RecordRepository : BaseRepository<Record>, IRecordRepository
    {
        public RecordRepository(AppDbContext context) : base(context) { }

        public IQueryable<Record> FindByUserId(string userId, CancellationToken cancellationToken = default)
            => FindAll().Where(x => x.UserId == userId);

        public async Task<Record> FindLatest(string userId, CancellationToken cancellationToken = default)
            => await FindAll(rec => rec.UserId.Equals(userId)).OrderByDescending(rec => rec.DateIssued).FirstAsync(cancellationToken);
    }
}
