use std::slice;

fn safe_conversion(data: &[u32]) -> &[u8] {
    unsafe {
        slice::from_raw_parts(
            data.as_ptr() as *const u8,
            data.len() * 4,
        )
    }
}
