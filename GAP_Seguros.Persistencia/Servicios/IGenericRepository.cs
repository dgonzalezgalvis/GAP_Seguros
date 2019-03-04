using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace GAP_Seguros.Persistencia.Servicios
{
    public interface IGenericRepository<T> where T : class
    {
        IQueryable<T> GetAll();
        IQueryable<T> Get(int Id);
        IQueryable<T> Find(Expression<Func<T, bool>> predicate);
        void Add(T entity);
        void Delete(T entity);
        void Edit(T entity);
        void Save();

    }
}
