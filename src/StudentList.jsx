import React from 'react'

export default function StudentList({data}) {
  return (
    <div>StudentList
        {data?.map((student) => (
            <p>{student.name}</p>
        ))}
    </div>
  )
}
