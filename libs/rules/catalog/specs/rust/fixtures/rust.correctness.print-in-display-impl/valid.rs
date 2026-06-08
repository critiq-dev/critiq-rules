use std::fmt::{self, Display, Formatter};

struct Good;
impl Display for Good {
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        write!(f, "Good")
    }
}
